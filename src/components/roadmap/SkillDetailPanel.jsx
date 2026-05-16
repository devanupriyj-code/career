import TopicOverview from "./TopicOverview"
import MiniTaskList from "./MiniTaskList"
import ResourceSection from "./ResourceSection"
import InterviewPrepPanel from "./InterviewPrepPanel"

export default function SkillDetailPanel({ topic }) {
  if (!topic) return null

  return (
    <div className="flex flex-col gap-8 pb-12">
      <TopicOverview topic={topic} />
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <MiniTaskList tasks={topic.miniTasks} />
      <ResourceSection resources={topic.resources} />
      <InterviewPrepPanel questions={topic.interviewQuestions} />
    </div>
  )
}
