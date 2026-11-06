// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-status-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-status-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      <div data-surface-id="SURF_STATUS_PAGE" className="flex-1 flex flex-col justify-between p-6 md:p-10" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_STATUS_PERSISTS_AFTER_RELOAD OBS_REFRESH_STATUS_STATUS_TEXT_SHOWN OBS_REFRESH_STATUS_STATUS_VALUE_REFRESHED OBS_REFRESH_STATUS_STAYS_ON_STATUS_ROUTE">
          <header className="max-w-4xl w-full mx-auto flex items-center justify-between pb-8 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-lg">
                SU
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-tight">Status Utility</h1>
                <p className="text-xs font-mono text-slate-500">Route: /status</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Operational
              </span>
              <span className="text-xs text-slate-400 font-mono">v1.2.0</span>
            </div>
          </header>
      
          <main className="max-w-4xl w-full mx-auto my-auto py-10">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">System Status Overview</h2>
                  <p className="text-sm text-slate-500 mt-1">Real-time health verification and state telemetry for the application runtime.</p>
                </div>
                <div>
                  <button type="button" data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_BUTTON" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm shadow-sm transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_REFRESH_BUTTON_VISIBLE_AND_ENABLED" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
                    Refresh Status
                  </button>
                </div>
              </div>
      
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
                <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-100">
                  <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Application State</span>
                  <div className="text-2xl font-bold text-slate-900 mt-2">refreshed</div>
                  <p className="text-xs text-slate-500 mt-1">Status value refreshed and synchronized</p>
                </div>
      
                <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-100">
                  <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Sync Status</span>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-lg font-semibold text-slate-900">Status refreshed</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Latest handshake confirmed</p>
                </div>
      
                <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-100">
                  <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Target Route</span>
                  <div className="text-xl font-mono font-semibold text-slate-800 mt-2">/status</div>
                  <p className="text-xs text-slate-500 mt-1">Active endpoint binding</p>
                </div>
              </div>
      
              <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200/60">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-slate-800">Persistence Diagnostics</h3>
                  <span className="text-xs font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">Local Storage: Synced</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Application state persists across browser reloads. When activated, the status is committed to local storage with confirmation notice “Status refreshed” and active state code <code className="px-1.5 py-0.5 rounded bg-slate-200/70 font-mono text-slate-800">refreshed</code>.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-wrap gap-4 text-xs font-mono text-slate-500">
                  <span>Status: refreshed</span>
                  <span>Message: Status refreshed</span>
                  <span>Route: /status</span>
                </div>
              </div>
            </div>
          </main>
      
          <footer className="max-w-4xl w-full mx-auto pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
            <span>Status Utility Monitor © 2025</span>
            <span className="font-mono">Route endpoint active at /status</span>
          </footer>
        </div>
    </>
  );
}
