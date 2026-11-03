export const aiMainGroups = ['Thinking orbs', 'Thinking text', 'Loading'] as const;
export const aiMoreGroups = ['Lists and rows', 'Cards', 'Misc.'] as const;
export type AiGroup = typeof aiMainGroups[number] | typeof aiMoreGroups[number];

const groupsById: Record<string, AiGroup> = {
  'boardui-agent-log': 'Loading',
  'boardui-composer-loader': 'Loading',
  'affect-shimmer-text': 'Thinking text',
  'arc-text-shimmer': 'Thinking text',
  'aicss-thinking': 'Thinking text',
  'aicss-reasoning': 'Thinking text',
  'beautiful-thinking': 'Thinking text',
  'aicss-task-list': 'Lists and rows',
  'beautiful-task-rows': 'Lists and rows',
  'affect-decisions': 'Lists and rows',
  'affect-thinking-loader': 'Loading',
  'affect-thinking-plain': 'Loading',
  'beautiful-loading': 'Loading',
  'beautiful-agent-screen-loading': 'Loading',
  'aicss-approval-questions': 'Cards',
  'aicss-approval-command': 'Cards',
  'aicss-approval-plan': 'Cards',
  'affect-tool-call': 'Cards',
  'affect-tool-error': 'Cards',
  'affect-recommendation': 'Cards',
  'beautiful-approval': 'Cards',
  'beautiful-recommendation': 'Cards',
  'beautiful-context': 'Cards',
};

export function aiGroupFor(id: string): AiGroup {
  if (id.startsWith('boardui-thinking-')) return 'Loading';
  if (id.startsWith('libraries-orb-') || id.startsWith('aicss-orb-')) return 'Thinking orbs';
  return groupsById[id] ?? 'Misc.';
}
