package preproject.back.auth.handler;

import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import preproject.back.response.ErrorResponse;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class MemberAuthenticationFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException {
        // 인증 실패 시, 에러 로그를 기록하거나 error response를 전송할 수 있다.
        log.error("# Authentication failed: {}", exception.getMessage());

        sendErrorResponse(response);
    }
    private void sendErrorResponse(HttpServletResponse response) throws IOException {
        Gson gson = new Gson();
        ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.UNAUTHORIZED); //인증 실패 코드를 전달
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);    // response의 Content Type이 “application/json” 이라는 것을 클라이언트에게 알려줌
        response.setStatus(HttpStatus.UNAUTHORIZED.value());          // response의 status가 401임을 클라이언트에게 알려줌
        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));   //Gson을 이용해 ErrorResponse 객체를 JSON 포맷 문자열로 변환후 출력
    }

}
