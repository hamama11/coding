function PolicyFooter() {
  return (
    <footer className="mt-8 pt-4 no-print" style={{ borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
      <p style={{ marginBottom: '0.5rem' }}>
        <strong>교사용 수시 상담 보조 프로그램</strong> | 버전 1.0.0 (시행일: 2026.06.27)
      </p>
      
      <div className="grid grid-cols-2 gap-4 mt-4" style={{ textAlign: 'left', background: 'var(--surface-color)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
        <div>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>🛡 개인정보 처리방침 (요약)</h4>
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            <li><strong>목적:</strong> 교사의 진학 지도 및 대학 포트폴리오 점검</li>
            <li><strong>처리 항목:</strong> (필수) 가명 학생 식별자, 내신/모의고사 등급</li>
            <li><strong>보유 기간:</strong> 브라우저 종료 및 새로고침 시 <strong>즉시 파기</strong>됩니다. 서버 저장은 일체 없습니다.</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>⚖️ 이용약관 (면책조항)</h4>
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            <li>학생 데이터 접근 권한이 있는 진학 담당 교사만 사용해야 합니다.</li>
            <li>본 도구의 결과는 <strong>보조 지표</strong>일 뿐입니다. 실제 합불 여부 및 수능최저 충족 여부는 반드시 각 대학 공식 모집요강을 교차 확인해야 합니다.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default PolicyFooter;
