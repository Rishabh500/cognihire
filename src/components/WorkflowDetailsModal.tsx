import React from 'react';
import { WorkflowNodeData } from '../types';
import {
  X,
  Sparkles,
  CheckCircle,
  Sliders,
  AlertTriangle,
  GitBranch,
} from 'lucide-react';

interface WorkflowDetailsModalProps {
  node: WorkflowNodeData | null;
  onClose: () => void;
  onSelectNode: (nodeId: string) => void;
  allNodes: WorkflowNodeData[];
}

export const WorkflowDetailsModal: React.FC<WorkflowDetailsModalProps> = ({
  node,
  onClose,
  onSelectNode,
  allNodes,
}) => {
  if (!node) return null;

  const currentIndex = allNodes.findIndex((n) => n.id === node.id);
  const prevNode = currentIndex > 0 ? allNodes[currentIndex - 1] : null;
  const nextNode = currentIndex < allNodes.length - 1 ? allNodes[currentIndex + 1] : null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-forest-dark/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white border border-border rounded-2xl shadow-deep overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header strip */}
        <div className="bg-forest px-6 py-5 text-white flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-forest-surface border border-forest-border flex items-center justify-center text-mint font-bold text-sm">
              0{node.stageNumber}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-mint">
                  {node.categoryLabel}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-forest-surface text-sage-light border border-forest-border">
                  Stage {node.stageNumber} of {allNodes.length}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mt-0.5">
                {node.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-sage-light hover:text-white hover:bg-forest-surface transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Overview text */}
          <div className="bg-mist rounded-xl p-4 border border-border">
            <p className="text-sm text-ink-primary leading-relaxed font-medium">
              {node.details.description}
            </p>
          </div>

          {/* AI vs Recruiter Control Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-border shadow-subtle">
              <div className="flex items-center gap-2 text-forest-deep font-semibold text-sm mb-2">
                <Sparkles className="w-4 h-4 text-mint-dark" />
                <span>What the AI Does</span>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                {node.details.whatAiDoes}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-border shadow-subtle">
              <div className="flex items-center gap-2 text-forest-deep font-semibold text-sm mb-2">
                <Sliders className="w-4 h-4 text-sage-dark" />
                <span>What the Recruiter Controls</span>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                {node.details.whatRecruiterControls}
              </p>
            </div>
          </div>

          {/* Decision branches if present */}
          {node.branches && node.branches.length > 0 && (
            <div className="p-4 rounded-xl bg-mist border border-border">
              <div className="flex items-center gap-2 text-forest-deep font-semibold text-sm mb-3">
                <GitBranch className="w-4 h-4 text-forest" />
                <span>Branching Logic</span>
              </div>
              <div className="space-y-2.5">
                {node.branches.map((b) => (
                  <div
                    key={b.id}
                    className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-border text-xs"
                  >
                    <span
                      className={`px-2 py-0.5 rounded font-semibold text-[11px] whitespace-nowrap ${
                        b.type === 'success'
                          ? 'bg-mint/40 text-forest-deep border border-mint'
                          : b.type === 'warning'
                          ? 'bg-amber-100 text-amber-900 border border-amber-200'
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {b.label}
                    </span>
                    <span className="text-ink-muted flex-1">{b.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exception notes if present */}
          {node.exceptionNotes && node.exceptionNotes.length > 0 && (
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200">
              <div className="flex items-center gap-2 text-amber-900 font-semibold text-xs uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Configured Exception Handlers</span>
              </div>
              <ul className="space-y-1.5 text-xs text-amber-950">
                {node.exceptionNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Inputs & Outputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-mist border border-border">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted block mb-2">
                Required Inputs
              </span>
              <ul className="space-y-1 text-xs text-ink-primary">
                {node.details.inputs.map((inp, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>{inp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-mist border border-border">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted block mb-2">
                Stage Deliverables
              </span>
              <ul className="space-y-1 text-xs text-ink-primary">
                {node.details.outputs.map((out, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-dark flex-shrink-0" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Example Result */}
          <div className="p-4 rounded-xl bg-white border border-border shadow-subtle">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-sage-dark block mb-1">
              Example Artifact in Production
            </span>
            <p className="text-xs text-ink-primary font-mono bg-mist p-2.5 rounded-lg border border-border">
              {node.details.exampleResult}
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="px-6 py-4 bg-mist border-t border-border flex items-center justify-between">
          <div>
            {prevNode ? (
              <button
                onClick={() => onSelectNode(prevNode.id)}
                className="text-xs font-semibold text-forest hover:text-forest-deep flex items-center gap-1"
              >
                ← Stage {prevNode.stageNumber}: {prevNode.title}
              </button>
            ) : (
              <span className="text-xs text-ink-subtle">First stage</span>
            )}
          </div>
          <div>
            {nextNode ? (
              <button
                onClick={() => onSelectNode(nextNode.id)}
                className="text-xs font-semibold text-forest hover:text-forest-deep flex items-center gap-1"
              >
                Stage {nextNode.stageNumber}: {nextNode.title} →
              </button>
            ) : (
              <button
                onClick={onClose}
                className="text-xs font-semibold text-white bg-forest hover:bg-forest-hover px-3 py-1.5 rounded-lg"
              >
                Done
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
