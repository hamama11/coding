import { useState } from 'react';
import StudentProfile from './components/StudentProfile';
import UniversitySelector from './components/UniversitySelector';
import AnalysisDashboard from './components/AnalysisDashboard';
import PolicyFooter from './components/PolicyFooter';
import './App.css'; // Will be removed or kept empty

function App() {
  const [student, setStudent] = useState({
    id: '',
    gpa: '',
    mockGrade: ''
  });

  const [universities, setUniversities] = useState(
    Array(6).fill({
      name: '',
      major: '',
      type: '적정', // 상향, 적정, 안정
      csatRequired: false,
      notes: ''
    })
  );

  const handleStudentChange = (field, value) => {
    setStudent(prev => ({ ...prev, [field]: value }));
  };

  const handleUniversityChange = (index, field, value) => {
    const newUniversities = [...universities];
    newUniversities[index] = { ...newUniversities[index], [field]: value };
    setUniversities(newUniversities);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    if (confirm('작성 중인 모든 정보가 삭제됩니다. 초기화하시겠습니까?')) {
      setStudent({ id: '', gpa: '', mockGrade: '' });
      setUniversities(Array(6).fill({
        name: '',
        major: '',
        type: '적정',
        csatRequired: false,
        notes: ''
      }));
    }
  };

  return (
    <div className="app-container">
      <header className="app-header no-print">
        <h1>수시 6개 대학 포트폴리오 관리</h1>
        <p>서버 저장 없이 브라우저에서만 안전하게 동작합니다.</p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="btn btn-outline" onClick={handleReset}>초기화</button>
          <button className="btn btn-primary" onClick={handlePrint}>리포트 인쇄</button>
        </div>
      </header>

      <main className="grid gap-4">
        {/* 학생 기본 정보 */}
        <section className="glass-panel">
          <h2>학생 정보</h2>
          <StudentProfile student={student} onChange={handleStudentChange} />
        </section>

        {/* 대시보드 */}
        <section className="glass-panel">
          <h2>포트폴리오 분석</h2>
          <AnalysisDashboard universities={universities} />
        </section>

        {/* 6개 대학 선택 */}
        <section className="glass-panel">
          <h2>6개 지원 대학 구성</h2>
          <div className="grid grid-cols-2 mt-4">
            {universities.map((uni, index) => (
              <UniversitySelector
                key={index}
                index={index}
                university={uni}
                onChange={handleUniversityChange}
              />
            ))}
          </div>
        </section>
      </main>

      <PolicyFooter />
    </div>
  );
}

export default App;
