// ============================================================
// 교육청 학생맞춤통합회의 시뮬레이터 — 공유 타입 정의
// DB 담당: 팀 전체가 이 파일에 의존하므로 가장 먼저 완성
// ============================================================

export type SpeakerRole = '장학사' | 'Wee센터' | '교육복지사' | '아보전' | '지자체';
export type VoiceName = 'Charon' | 'Leda' | 'Autonoe' | 'Rasalgethi' | 'Enceladus';

export interface DialogueLine {
  role: SpeakerRole;
  text: string;
}

export interface MeetingStep {
  title: string;
  duration: string;
  goal: string;
}

export interface RiskLevels {
  safety: number;       // 신체 안전성 (방임)  0–100
  development: number;  // 아동 발달권 (영양)  0–100
  social: number;       // 사회적 적응 (부적응) 0–100
}

export interface MeetingState {
  currentStep: number;
  logs: DialogueLine[];
  riskLevels: RiskLevels;
  isMuted: boolean;
  isSpeaking: boolean;
  error: string | null;
}

// localStorage 저장 스키마 (버전 suffix로 변경 관리)
export interface PersistedSession {
  currentStep: number;
  logs: DialogueLine[];
  riskLevels: RiskLevels;
  savedAt: string; // ISO 8601
  schemaVersion: 'v1';
}

// Phase 2 확장용 (현재 미사용)
export interface StudentCase {
  id: string;
  name: string;       // 익명 처리 (예: "초4 남학생 A")
  grade: string;
  concerns: string[];
  createdAt: string;
}

export interface MeetingSession {
  id: string;
  caseId: string;
  completedSteps: number;
  logs: DialogueLine[];
  riskLevels: RiskLevels;
  savedAt: string;
}
