import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const DEFAULT_TABS = [
  {
    id: "checkout",
    filename: "checkout.routes.js",
    badge: "LIVE",
    language: "JAVASCRIPT",
    branch: "main",
    encoding: "UTF-8",
    lines: [
      "import { Router } from 'express';",
      "import { Order, Cart } from '../models';",
      "",
      "const router = Router();",
      "",
      "// reserve stock, then publish to the queue",
      "router.post('/checkout', async (req, res) => {",
      "  const session = await Cart.open(req.user.id);",
      "  const order = await Order.create(session);",
      "  await queue.publish('order.created', order);",
      "",
      "  res.status(201).json({ orderId: order.id });",
      "});",
      "",
      "export default router;",
    ],
  },
  {
    id: "schema",
    filename: "schema.js",
    badge: "LIVE",
    language: "JAVASCRIPT",
    branch: "main",
    encoding: "UTF-8",
    lines: [
      "import mongoose from 'mongoose';",
      "",
      "const orderSchema = new mongoose.Schema(",
      "  {",
      "    userId: { type: String, required: true },",
      "    total: { type: Number, required: true },",
      "    status: { type: String, default: 'pending' },",
      "  },",
      "  { timestamps: true }",
      ");",
      "",
      "export const Order = mongoose.model('Order', orderSchema);",
    ],
  },
];

const DEFAULT_TAGS = [
  { label: "React", checked: false },
  { label: "Node.js", checked: false },
  { label: "MongoDB", checked: false },
  { label: "end-to-end", checked: true },
];

export default function CodePreviewCard({
  tabs = DEFAULT_TABS,
  tags = DEFAULT_TAGS,
  className = "",
}) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || "");
  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <div className={`flex flex-col gap-3.5 ${className}`.trim()}>
      {/* Editor Window */}
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-border bg-background/70 px-4 py-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>

            <div className="flex items-center gap-1">
              {tabs.map((tab) => {
                const isActive = tab.id === currentTab?.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    className={`cursor-pointer rounded-md px-2.5 py-1 font-sans text-xs transition-colors ${
                      isActive
                        ? "border border-border bg-surface-light text-white"
                        : "text-muted hover:text-secondary"
                    }`}
                  >
                    {tab.filename}
                  </button>
                );
              })}
            </div>
          </div>

          {currentTab?.badge && (
            <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-medium tracking-wider text-primary uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {currentTab.badge}
            </span>
          )}
        </div>

        {/* Code Body */}
        <div className="overflow-x-auto bg-background/60 px-4 py-4 font-mono text-xs leading-6 sm:text-[13px]">
          {currentTab?.lines.map((line, idx) => (
            <div key={idx} className="flex gap-4">
              <span className="w-5 shrink-0 select-none text-right text-muted/60">
                {idx + 1}
              </span>
              <code className="whitespace-pre text-secondary">
                {line || " "}
              </code>
            </div>
          ))}
        </div>

        {/* Bottom Status Bar */}
        <div className="flex items-center justify-between border-t border-border bg-surface px-4 py-2 font-sans text-[11px] tracking-widest text-muted uppercase">
          <span>{currentTab?.language || "JAVASCRIPT"}</span>
          <div className="flex items-center gap-3">
            <span>{currentTab?.branch || "main"}</span>
            <span>{currentTab?.encoding || "UTF-8"}</span>
          </div>
        </div>
      </div>

      {/* Stack Pills Row */}
      {tags.length > 0 && (
        <div className="flex flex-wrap items-center justify-end gap-2">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-sans text-xs ${
                tag.checked
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-surface/80 text-secondary"
              }`}
            >
              {tag.checked && (
                <FiCheck className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
