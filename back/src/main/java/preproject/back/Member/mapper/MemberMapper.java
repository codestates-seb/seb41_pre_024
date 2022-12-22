package preproject.back.Member.mapper;

import org.mapstruct.Mapper;
import preproject.back.Member.Entity.Member;
import preproject.back.Member.dto.MemberPatchDto;
import preproject.back.Member.dto.MemberPostDto;
import preproject.back.Member.dto.MemberResponseDto;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto  memberPostDto);
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
    MemberResponseDto memberToMemberResponseDto(Member member);


}
