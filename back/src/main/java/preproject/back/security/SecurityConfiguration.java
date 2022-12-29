package preproject.back.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import preproject.back.auth.filter.JwtAuthenticationFilter;
import preproject.back.auth.filter.JwtVerificationFilter;
import preproject.back.auth.jwt.JwtTokenizer;
import preproject.back.auth.utils.CustomAuthorityUtils;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;


@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils customAuthorityUtils;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils customAuthorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.customAuthorityUtils = customAuthorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin() // 동일 출처로부터 들어오는 request만 페이지 렌더링을 허용
                .and()
                .csrf().disable() //CSRF 공격에 대한 설정
                .cors(withDefaults()) //CorsFilter를 사용해서 cors처리
                .formLogin().disable() //폼로그인 안씀
                .httpBasic().disable() // 이것도 안씀
//                .exceptionHandling()
//                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())  // 추가
//                .accessDeniedHandler(new MemberAccessDeniedHandler())
//                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/*/api/members").permitAll()
                        .antMatchers(HttpMethod.PATCH,"/*/api/members/**").hasRole("User")
                        .antMatchers(HttpMethod.GET, "/*/api/members/**").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/*/api/members/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/api/members/questions/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/api/members/answers/**").hasRole("USER")

                        .antMatchers(HttpMethod.POST,"/*/api/questions").hasRole("User")
                        .antMatchers(HttpMethod.PATCH,"/*/api/questions/**").hasRole("User")
                        .antMatchers(HttpMethod.GET, "/*/api/questions/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/*/api/questions/**").hasRole("USER")
                        // TODO: 질문 리스트 조회 기능
                        .antMatchers(HttpMethod.POST,"/*/api/answers").hasRole("User")
                        .antMatchers(HttpMethod.PATCH,"/*/api/answers/**").hasRole("User")
                        .antMatchers(HttpMethod.GET, "/*/api/answers/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/*/api/answers/**").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH,"/*/api/answers/recommend/down/**").hasRole("User")
                        .antMatchers(HttpMethod.PATCH,"/*/api/answers/recommend/up/**").hasRole("User")
                        .antMatchers(HttpMethod.PATCH,"/*/api/answers/adoption/**").hasRole("User")


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
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }



    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
//            jwtAuthenticationFilter.setFilterProcessesUrl("/auth/login");


            builder.addFilter(jwtAuthenticationFilter);
        }
    }
}
