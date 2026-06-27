function UniversitySelector({ index, university, onChange }) {
  const getBadgeClass = (type) => {
    switch(type) {
      case '상향': return 'badge-stretch';
      case '적정': return 'badge-match';
      case '안정': return 'badge-safety';
      default: return '';
    }
  };

  return (
    <div className="glass-panel card-hover" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
      <div className="flex justify-between items-center mb-4">
        <h3 style={{ margin: 0 }}>지원 카드 {index + 1}</h3>
        <span className={`badge ${getBadgeClass(university.type)}`}>{university.type}</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="input-group">
          <label className="input-label">대학명/전형</label>
          <input 
            type="text" 
            className="input-field" 
            placeholder="예: A대학교 학종" 
            value={university.name}
            onChange={(e) => onChange(index, 'name', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="input-label">모집단위(학과)</label>
          <input 
            type="text" 
            className="input-field" 
            placeholder="예: 컴퓨터공학과" 
            value={university.major}
            onChange={(e) => onChange(index, 'major', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="input-group">
          <label className="input-label">지원 성향</label>
          <select 
            className="input-field" 
            value={university.type}
            onChange={(e) => onChange(index, 'type', e.target.value)}
          >
            <option value="상향">상향 지원 (Stretch)</option>
            <option value="적정">적정 지원 (Match)</option>
            <option value="안정">안정 지원 (Safety)</option>
          </select>
        </div>
        <div className="input-group" style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
          <label className="flex items-center gap-2" style={{ cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              checked={university.csatRequired}
              onChange={(e) => onChange(index, 'csatRequired', e.target.checked)}
              style={{ width: '1.2rem', height: '1.2rem', cursor: 'pointer' }}
            />
            <span style={{ fontWeight: 500 }}>수능 최저학력기준 있음</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default UniversitySelector;
