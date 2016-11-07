import React, { Component } from 'react';
import { Button,
  FormGroup, FormControl, ControlLabel, HelpBlock, Radio
} from 'react-bootstrap';

export class RegisterPollFormKor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agreedKoreanPrivacyPolicy : false,
      korName : '',
      mobilePhoneNum : '',
    };
  }

  getMobileNumValidationState() {
    var mobileRe = new RegExp("^\d{3}-\d{3,4}-\d{4}$");

    if (mobileRe.test(this.state.mobilePhoneNum)) {
      return 'success';
    } else {
      return 'error';
    }
  }

  handleMobileNumOnChange(event) {
    this.setState({ tempEmail : event.target.value })
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formPersonalInfoRadio"
        >
          <FormControl.Static>
            개인정보 동의
          </FormControl.Static>
          <p>
            개인정보 보호법에 근거하여, 다음과 같이 &lsquo;2017 윈터스쿨 숙소 예약 신청&rsquo;
          업무의 수행에 반드시 필요한 범위 내에서 개인정보를 제공받고 활용하는데 있어서 동의를 받고자 합니다.
          </p>
          <ol>
            <li> 개인정보를 제공받는 자 : 연세대학교 계산과학공학과 (A3 Foresight Program) </li>
            <li> 개인정보를 제공받는 자의 개인정보 이용목적 : 2017 윈터스쿨 숙소 예약 신청 </li>
            <li> 제공하는 개인정보의 항목 및 폐기 : 성명, 전화번호, 이메일, 카드정보 등은 윈터스쿨 완료 후 10일 이후에 폐기 및 삭제합니다. </li>
            <li> 동의를 거부할 권리 안내 : 귀하는 위와 같이 개인정보를 제공하는데 대한 동의를 거부할 권리가 있습니다. 그러나 동의를 거부하실 경우 ‘2017 윈터스쿨 등록'을 할 수 없으며, 그에 따른 적절한 안내를 받으실 수 없습니다. </li>
          </ol>
          <Radio>
           동의함
          </Radio>
          <Radio>
           동의하지 않음
          </Radio>
          <HelpBlock> 동의하시지 않을 시 등록이 되지 않습니다. </HelpBlock>
        </FormGroup>

        <FormGroup
         controlId="formKorNameText"
        >
         ​<ControlLabel>이름 (국문)</ControlLabel>
         <FormControl
           type="text"
           value={ this.state.korName }
           placeholder="홍길동"
         />
        </FormGroup>
        <FormGroup
          controlId="formMobileNumText"
        >
          ​<ControlLabel>핸드폰 번호</ControlLabel>
          <FormControl
            type="text"
            value={ this.state.mobilePhoneNum }
            placeholder="010-0000-0000"
          />
        </FormGroup>

      </form>
    )
  }
}

export class RegisterPollFormNonKor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nationality : '',
    };
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formNationalityText"
        >
          ​<ControlLabel>Nationality</ControlLabel>
          <FormControl
            type="text"
            value={ this.state.nationality }
            placeholder="South Korea"
          />
        </FormGroup>
      </form>
    )
  }
}

export class RegisterPollFormCommon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      engLastName : '',
      engFirstName : '',
      affiliation : '',
      position : '',
      advisorName : '',
      isPresentPoster : false
    };
  }

  render() {
    return (
      <div>
      <FormGroup
        controlId="formEngLastNameText"
      >
        ​<ControlLabel>First Name</ControlLabel>
        <FormControl
          type="text"
          value={ this.state.engFirstName }
          placeholder="Albert"
        />
      </FormGroup>

      <FormGroup
        controlId="formEngFirstNameText"
      >
        ​<ControlLabel>Last Name</ControlLabel>
        <FormControl
          type="text"
          value={ this.state.engLastName }
          placeholder="Einstein"
        />
      </FormGroup>

      <FormGroup
        controlId="formAffiliationText"
      >
        ​<ControlLabel>Affiliation</ControlLabel>
        <FormControl
          type="text"
          value={ this.state.affiliation }
          placeholder="Dept. of CSE, Yonsei University"
        />
      </FormGroup>

      <FormGroup
        controlId="formPositionText"
      >
        ​<ControlLabel>Position</ControlLabel>
        <FormControl
          type="text"
          value={ this.state.position }
          placeholder="Professor"
        />
      </FormGroup>

      <FormGroup
        controlId="formAdvisorText"
      >
        ​<ControlLabel>Advisor</ControlLabel>
        <FormControl
          type="text"
          value={ this.state.advisorName }
          placeholder="Jin Keun Seo"
        />
        <HelpBlock>Enter if you are not a professor </HelpBlock>
      </FormGroup>

      <FormGroup
        controlId="formPosterRadio"
      >
       <FormControl.Static>
         Are you going to present poster?
       </FormControl.Static>
       <Radio>
         Yes
       </Radio>
       <Radio>
         No
       </Radio>
      </FormGroup>
      </div>
    )
  }
}
