const logoMain = "/logomain.png";

export default function PrivacyPage() {
  return (
    <div className="legal-shell">
      <header className="legal-header">
        <a href="/">
          <img src={logoMain} alt="IDly" className="footer-logo" />
        </a>
      </header>

      <main className="legal-content">
        <h1>개인정보처리방침</h1>
        <p className="legal-intro">
          아이들리(IDly, 이하 "회사")는 개인정보보호법, 정보통신망 이용촉진 및
          정보보호 등에 관한 법률 등 관련 법령에 따라 이용자의 개인정보를
          보호하고 이와 관련한 고충을 신속하게 처리할 수 있도록 다음과 같이
          개인정보처리방침을 수립·공개합니다.
        </p>

        <section className="legal-section">
          <h2>1. 수집하는 개인정보 항목</h2>
          <p>IDly(이하 "서비스")는 서비스 제공을 위해 다음과 같은 정보를 수집합니다.</p>
          <p>
            <strong>■ Google 계정을 통한 로그인 시 수집 항목</strong>
            {"\n"}- 이름, 이메일 주소, 프로필 사진 (Google OAuth 기본 정보)
          </p>
          <p>
            <strong>■ Gmail 데이터 접근 (gmail.readonly 권한)</strong>
            {"\n"}- 계정 보안 관련 메일 식별 및 분석을 위해 Gmail 메일함 읽기 권한을 사용합니다.
            {"\n"}- 이메일 원문은 분석 후 즉시 파기하며 서버에 저장되지 않습니다.
            {"\n"}- 보안 위험 판단에 필요한 최소한의 추출 정보(발신자 도메인, 보안 이벤트 유형, 수신 일시)만 보관합니다.
          </p>
          <p>
            <strong>■ 서비스 이용 과정에서 수집되는 정보</strong>
            {"\n"}- 기기 정보, 접속 로그, 서비스 이용 기록
          </p>
        </section>

        <section className="legal-section">
          <h2>2. 개인정보 수집 및 이용 목적</h2>
          <p>
            수집한 개인정보는 다음 목적으로만 사용됩니다.
            {"\n\n"}- 회원 가입 및 본인 확인
            {"\n"}- Gmail 메일 분석을 통한 계정 보안 위험 탐지 및 알림
            {"\n"}- 서비스 개선 및 오류 대응
            {"\n"}- 법령상 의무 이행
            {"\n\n"}Gmail 데이터는 오직 계정 보안 분석 목적으로만 사용되며, 광고·마케팅·제3자 제공 등 다른 목적으로 사용하지 않습니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. 개인정보 보유 및 이용 기간</h2>
          <p>
            - 회원 탈퇴 시까지 보관 후 즉시 파기합니다.
            {"\n"}- 이메일 원문은 분석 완료 후 즉시 삭제합니다. 서버에 저장되지 않습니다.
            {"\n"}- 분석 결과(보안 점수, 위험 항목 요약)는 서비스 제공을 위해 탈퇴 전까지 보관합니다.
            {"\n"}- 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 별도 보관합니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. 개인정보의 제3자 제공</h2>
          <p>
            IDly는 수집된 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우는 예외로 합니다.
            {"\n\n"}- 이용자가 사전에 동의한 경우
            {"\n"}- 법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관이 요구하는 경우
            {"\n\n"}Gmail 계정 데이터는 어떠한 경우에도 제3자에게 판매·임대·공유되지 않습니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. 개인정보 처리 위탁</h2>
          <p>IDly는 서비스 운영을 위해 아래 업체에 개인정보 처리를 위탁합니다.</p>
          <table className="legal-table">
            <thead>
              <tr><th>수탁업체</th><th>위탁 업무</th></tr>
            </thead>
            <tbody>
              <tr><td>Supabase Inc.</td><td>데이터베이스 관리</td></tr>
              <tr><td>Render Inc.</td><td>서버 운영</td></tr>
              <tr><td>Google LLC</td><td>인증 및 Gmail API 제공</td></tr>
            </tbody>
          </table>
          <p>위탁 업체들은 위탁 업무 처리 외 목적으로 개인정보를 이용하지 않으며, 계약 종료 시 즉시 반환·파기합니다.</p>
        </section>

        <section className="legal-section">
          <h2>6. 이용자의 권리 및 행사 방법</h2>
          <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
          <p>
            - <strong>개인정보 열람</strong>: 마이 → 개인정보 관련 문의를 통해 요청
            {"\n"}- <strong>개인정보 수정</strong>: 앱 내 프로필 설정 화면에서 직접 수정
            {"\n"}- <strong>Gmail 연동 해제</strong>: 마이 → 계정 관리에서 직접 해제 가능
            {"\n"}- <strong>Google 권한 취소</strong>: Google 계정의 "계정에 액세스할 수 있는 앱"에서 IDly 권한 직접 철회 가능
            {"\n"}- <strong>회원 탈퇴 및 데이터 삭제</strong>: 마이 → 회원 탈퇴를 통해 모든 개인정보 즉시 삭제
          </p>
        </section>

        <section className="legal-section">
          <h2>7. 개인정보의 파기</h2>
          <p>
            보유 기간이 경과하거나 처리 목적이 달성된 경우 다음과 같이 파기합니다.
            {"\n\n"}- 전자적 파일 형태: 복구·재생이 불가능한 기술적 방법으로 삭제
            {"\n"}- 종이 문서: 분쇄 또는 소각
            {"\n\n"}이메일 원문은 AI 분석 완료 즉시 파기하며 IDly 서버에 저장되지 않습니다.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. 개인정보 보호책임자</h2>
          <p>
            개인정보 처리에 관한 업무를 총괄하며, 개인정보 관련 문의·불만 처리를 담당합니다.
            {"\n\n"}- 이름: 이현진
            {"\n"}- 직책: 대표
            {"\n"}- 이메일: idly1apt@gmail.com
          </p>
        </section>

        <section className="legal-section">
          <h2>9. 개인정보처리방침 변경</h2>
          <p>
            이 개인정보처리방침은 2026년 8월 31일부터 적용됩니다. 내용이 변경될 경우 앱 내 공지 또는 이 페이지를 통해 안내드립니다.
          </p>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-brand-row">
          <img src={logoMain} alt="IDly" className="footer-logo" />
        </div>
        <address className="footer-company" aria-label="회사 정보">
          <p>아이들리 | Founder: 이현진</p>
          <p>Contact: idly1apt@gmail.com</p>
        </address>
        <nav className="footer-links" aria-label="법적 문서">
          <a href="/privacy">개인정보처리방침</a>
          <a href="/terms">이용약관</a>
        </nav>
        <p className="footer-copy">© 2026 계정아파트. All rights reserved.</p>
      </footer>
    </div>
  );
}
