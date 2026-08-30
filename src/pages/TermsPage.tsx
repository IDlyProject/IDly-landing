const logoMain = "/logomain.png";

const SECTIONS = [
  {
    title: "제1조 (목적)",
    content: `이 이용약관은 아이들리(이하 "회사")가 운영하는 IDly 서비스(이하 "서비스")의 이용 조건 및 절차, 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.`,
  },
  {
    title: "제2조 (정의)",
    content: `① "서비스"란 회사가 제공하는 IDly 앱 및 관련 서비스 일체를 의미합니다.\n② "이용자"란 본 약관에 동의하고 서비스를 이용하는 모든 사람을 의미합니다.\n③ "Gmail 연동"이란 이용자가 Google 계정의 gmail.readonly 권한을 서비스에 부여하여 이메일 분석을 허용하는 행위를 의미합니다.`,
  },
  {
    title: "제3조 (약관의 효력 및 변경)",
    content: `① 이 약관은 서비스 화면에 게시하거나 이용자에게 공지함으로써 효력이 발생합니다.\n② 회사는 합리적인 사유가 있는 경우 약관을 변경할 수 있으며, 변경 시 적용 일자 및 변경 사유를 사전에 공지합니다.\n③ 이용자가 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.`,
  },
  {
    title: "제4조 (서비스의 내용)",
    content: `회사는 이용자의 Gmail 메일함을 분석하여 다음 서비스를 제공합니다.\n\n- 이메일 기반 연결 서비스 계정 자동 탐지\n- 계정별 보안 위험도 분석 및 시각화\n- 보안 위험 해소를 위한 조치 안내\n- 정기적인 계정 보안 상태 알림\n\n서비스의 세부 내용은 회사의 정책에 따라 변경될 수 있으며, 변경 시 사전 고지합니다.`,
  },
  {
    title: "제5조 (Gmail 데이터 이용에 관한 특칙)",
    content: `① 서비스는 이용자의 Gmail 메일함에 접근하기 위해 Google의 gmail.readonly 권한을 사용합니다.\n② 이메일 원문은 보안 분석 처리 후 즉시 파기되며 회사 서버에 저장되지 않습니다.\n③ Gmail 데이터는 오직 계정 보안 분석 목적으로만 사용되며 광고, 제3자 제공, 판매 등에 활용되지 않습니다.\n④ 이용자는 언제든지 Google 계정 설정에서 IDly의 Gmail 접근 권한을 철회할 수 있습니다.\n⑤ 권한 철회 시 서비스의 일부 또는 전부가 제한될 수 있습니다.`,
  },
  {
    title: "제6조 (이용자의 의무)",
    content: `이용자는 다음 행위를 해서는 안 됩니다.\n\n- 타인의 계정 정보를 도용하거나 무단으로 접근하는 행위\n- 서비스의 정상적인 운영을 방해하는 행위\n- 허위 정보를 제공하는 행위\n- 관련 법령을 위반하는 행위\n- 기타 회사가 합리적인 사유로 부적절하다고 판단하는 행위`,
  },
  {
    title: "제7조 (서비스 이용 제한)",
    content: `회사는 이용자가 제6조의 의무를 위반하거나 서비스의 정상 운영을 방해하는 경우 사전 통보 없이 서비스 이용을 제한할 수 있습니다.`,
  },
  {
    title: "제8조 (서비스 중단)",
    content: `회사는 다음 사유가 발생한 경우 서비스 제공을 일시 중단할 수 있습니다.\n\n- 서비스용 설비의 보수·점검 등 공사\n- 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지한 경우\n- 기타 불가항력적 사유\n\n회사는 서비스 중단 시 사전에 공지하며, 사전 공지가 불가능한 경우 사후에 지체 없이 알립니다.`,
  },
  {
    title: "제9조 (면책)",
    content: `① 회사는 천재지변 등 불가항력으로 인한 서비스 제공 불가 시 책임이 면제됩니다.\n② 이용자의 귀책사유로 발생한 서비스 이용 장애에 대해서는 책임이 없습니다.\n③ 서비스는 Gmail 분석에 기반한 보안 참고 정보를 제공하며, 법적·금융적 자문이 아닙니다. 분석 결과의 완전성·정확성을 보증하지 않습니다.`,
  },
  {
    title: "제10조 (분쟁 해결)",
    content: `① 서비스 이용과 관련하여 회사와 이용자 사이에 분쟁이 발생한 경우 양 당사자의 합의로 해결합니다.\n② 합의가 이루어지지 않은 경우 관할 법원은 민사소송법의 규정에 따릅니다.\n③ 이 약관에 관한 준거법은 대한민국 법률로 합니다.`,
  },
  {
    title: "부칙",
    content: `이 약관은 2026년 8월 31일부터 시행됩니다.`,
  },
];

export default function TermsPage() {
  return (
    <div className="legal-shell">
      <header className="legal-header">
        <a href="/">
          <img src={logoMain} alt="IDly" className="footer-logo" />
        </a>
      </header>

      <main className="legal-content">
        <h1>이용약관</h1>
        <p className="legal-intro">
          IDly 서비스를 이용해 주셔서 감사합니다. 서비스 이용 전 아래 약관을
          꼼꼼히 읽어주세요.
        </p>

        {SECTIONS.map((section) => (
          <section key={section.title} className="legal-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </main>

      <footer className="landing-footer">
        <div className="footer-brand-row">
          <img src={logoMain} alt="IDly" className="footer-logo" />
        </div>
        <address className="footer-company" aria-label="회사 정보">
          <p>아이들리 | Founder: 이현진</p>
          <p>Contact: idly1apt@gmail.com</p>
        </address>
        <nav className="footer-links legal-footer-links" aria-label="법적 문서">
          <a href="/privacy">개인정보처리방침</a>
          <a href="/terms">이용약관</a>
        </nav>
        <p className="footer-copy">© 2026 계정아파트. All rights reserved.</p>
      </footer>
    </div>
  );
}
