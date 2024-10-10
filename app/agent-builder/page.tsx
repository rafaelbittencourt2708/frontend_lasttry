"use client"

import { EmptyState } from "@/components/empty-state"

export default function AgentBuilderPage() {
  const handleNewAgent = () => {
    console.log("New agent clicked")
  }

  return (
    <EmptyState
      title="Agent Builder"
      description="Build your agent flows here"
      actionLabel="New Agent"
      onAction={handleNewAgent}
    />
  )
}