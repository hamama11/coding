function StudentProfile({ student, onChange }) {
  return (
    <div className="grid grid-cols-3">
      <div className="input-group">
        <label className="input-label">식별자 (가명/학번)</label>
        <input 
          type="text" 
          className="input-field" 
          placeholder="예: A학생" 
          value={student.id}
          onChange={(e) => onChange('id', e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className="input-label">내신 평균 등급</label>
        <input 
          type="number" 
          step="0.1"
          className="input-field" 
          placeholder="예: 2.3" 
          value={student.gpa}
          onChange={(e) => onChange('gpa', e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className="input-label">모의고사 백분위/등급</label>
        <input 
          type="text" 
          className="input-field" 
          placeholder="예: 2/3/2/1" 
          value={student.mockGrade}
          onChange={(e) => onChange('mockGrade', e.target.value)}
        />
      </div>
    </div>
  );
}

export default StudentProfile;
