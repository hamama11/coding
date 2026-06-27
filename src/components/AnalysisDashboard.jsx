function AnalysisDashboard({ universities }) {
  const counts = {
    상향: 0,
    적정: 0,
    안정: 0
  };
  
  let csatCount = 0;
  let filledCount = 0;

  universities.forEach(u => {
    if (u.name || u.major) {
      filledCount++;
      counts[u.type]++;
      if (u.csatRequired) csatCount++;
    }
  });

  return (
    <div>
      <div className="grid grid-cols-3 text-center mb-4">
        <div style={{ padding: '1rem', background: 'rgba(139, 92, 246, 0.05)', borderRadius: 'var(--radius-md)' }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--stretch-color)' }}>{counts['상향']}</div>
          <div style={{ color: 'var(--text-secondary)' }}>상향 (Stretch)</div>
        </div>
        <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.05)', borderRadius: 'var(--radius-md)' }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--match-color)' }}>{counts['적정']}</div>
          <div style={{ color: 'var(--text-secondary)' }}>적정 (Match)</div>
        </div>
        <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.05)', borderRadius: 'var(--radius-md)' }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--safety-color)' }}>{counts['안정']}</div>
          <div style={{ color: 'var(--text-secondary)' }}>안정 (Safety)</div>
        </div>
      </div>

      <div style={{ padding: '1rem', background: 'var(--surface-color)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
        <h4 style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>포트폴리오 요약</span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>작성됨: {filledCount} / 6</span>
        </h4>
        <ul style={{ listStyle: 'none', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            ✓ 수능 최저학력기준이 있는 전형: <strong>{csatCount}</strong>개
          </li>
          <li>
            ✓ 추천 점검: {
              counts['상향'] > 3 ? <span style={{ color: 'var(--danger-color)' }}>상향 지원이 다소 많습니다. 안정/적정 카드를 보강해 보세요.</span> : 
              counts['안정'] === 0 && filledCount === 6 ? <span style={{ color: 'var(--warning-color)' }}>안정 지원 카드가 하나도 없습니다. 재수 가능성을 고려해야 합니다.</span> : 
              <span style={{ color: 'var(--success-color)' }}>균형 잡힌 포트폴리오입니다.</span>
            }
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AnalysisDashboard;
