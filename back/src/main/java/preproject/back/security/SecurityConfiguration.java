package preproject.back.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import preproject.back.auth.filter.JwtAuthenticationFilter;
import preproject.back.auth.filter.JwtVerificationFilter;
import preproject.back.auth.handler.MemberAccessDeniedHandler;
import preproject.back.auth.handler.MemberAuthenticationEntryPoint;
import preproject.back.auth.handler.MemberAuthenticationFailureHandler;
import preproject.back.auth.handler.MemberAuthenticationSuccessHandler;
import preproject.back.auth.jwt.JwtTokenizer;
import preproject.back.auth.utils.CustomAuthorityUtils;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;


@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin() // 동일 출처로부터 들어오는 request만 페이지 렌더링을 허용
                .and()
                .csrf().disable() //CSRF 공격에 대한 설정
                .cors(withDefaults()) //CorsFilter를 사용해서 cors처리
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable() //폼로그인 안씀
                .httpBasic().disable() // 이것도 안씀
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/*/members").permitAll()
                        .antMatchers(HttpMethod.PATCH,"/*/members/**").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.GET, "/*/members/**").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/*/members/**").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.GET, "/*/members/questions/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/members/answers/**").hasRole("USER")

                        .antMatchers(HttpMethod.POST,"/*/questions").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH,"/*/questions/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/questions/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/*/questions/**").hasAnyRole("USER", "ADMIN")
                        // TODO: 질문 리스트 조회 기능
                        .antMatchers(HttpMethod.POST,"/*/answers").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH,"/*/answers/**").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.GET, "/*/answers/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/*/answers/**").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.PATCH,"/*/answers/recommend/down/**").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.PATCH,"/*/answers/recommend/up/**").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.PATCH,"/*/answers/adoption/**").hasAnyRole("USER", "ADMIN")
                        .anyRequest().permitAll()
                );
        return http.build();
    }

    //PasswordEncoder Bean 객체를 생성
    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    // CORS 정책을 설정
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*")); //모든 출처(Origin)에 대해 스크립트 기반의 HTTP 통신을 허용하도록 설정
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE")); //파라미터로 지정한 HTTP Method에 대한 HTTP 통신을 허용
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration); //모든 URL에 앞에서 구성한 CORS 정책(CorsConfiguration)을 적용
        return source;
    }



    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());
            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);
//            jwtAuthenticationFilter.setFilterProcessesUrl("/api/login");


            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);;
        }
    }
}
