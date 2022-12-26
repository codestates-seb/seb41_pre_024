package preproject.back.Answer.controller;


import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import preproject.back.Answer.controller.AnswerController;
import preproject.back.Answer.mapper.AnswerMapper;
import preproject.back.Answer.service.AnswerService;

@WebMvcTest(AnswerController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class AnswerControllerRestDocsTest {

    @Autowired
    private MockMvc mockMvc;

    // 테스트 대상 Controller 클래스가 의존하는 객체를 Mock Bean 객체로 주입 받기
    @MockBean
    private AnswerService memberService;

    @MockBean
    private AnswerMapper mapper;

    @Autowired
    private Gson gson;}

//    @Test
//    public void postAnswerTest() throws Exception {
//        // given
//        // (6) 테스트 데이터
//HTTP request에 필요한 request body나 query parmeter, path variable 등의 데이터를 추가
//
//        // (7) Mock 객체를 이용한 Stubbing
//(5)에서 주입 받은 Mock 객체가 동작하도록 Mockito에서 지원하는 given() 등의 메서드로 Stubbing

//        // when
//        ResultActions actions =
//                mockMvc.perform(
//                        // (8) MockMvc의 perform() 메서드로 request를 전송(슬라이스 테스트와 동일)
//                );
//
//        // then
//        actions
//                .andExpect(// (9) response에 대한 기대 값 검증(슬라이스 테스트와 동ㅇㄹ)
//                .andDo(document(
//                        // (10) API 문서 스펙 정보 추가
//                ));
//    }
//}
//
//}
