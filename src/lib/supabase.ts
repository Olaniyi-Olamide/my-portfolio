/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from "@supabase/supabase-js";
import { ContactMessage } from "../types";

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || "";

const isConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Resilient initialization: only instantiate if URL is set and valid-looking
export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Submits a contact message either to Supabase (if configured)
 * or falls back gracefully to localStorage while returning a success state.
 */
export async function sendMessage(message: ContactMessage): Promise<{ success: boolean; isDemo: boolean; error?: string }> {
  const messageData = {
    ...message,
    created_at: new Date().toISOString()
  };

  if (supabase) {
    try {
      const { error } = await supabase
        .from("messages")
        .insert([messageData]);

      if (error) {
        console.error("Supabase write error:", error);
        return { success: false, isDemo: false, error: error.message };
      }
      
      return { success: true, isDemo: false };
    } catch (e: any) {
      console.error("Supabase exception, falling back to local simulation:", e);
      // Fallback in case of network or other runtime issues
      saveToLocalFallback(messageData);
      return { success: true, isDemo: true };
    }
  } else {
    // Graceful fallback to simulate backend success
    saveToLocalFallback(messageData);
    // Artificially wait to simulate network response
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, isDemo: true };
  }
}

function saveToLocalFallback(message: any) {
  try {
    const existing = localStorage.getItem("portfolio_messages");
    const list = existing ? JSON.parse(existing) : [];
    list.push(message);
    localStorage.setItem("portfolio_messages", JSON.stringify(list));
    console.log("Saved message locally (Demo Fallback Mode):", message);
  } catch (err) {
    console.error("Failed to save to localStorage fallback:", err);
  }
}

/**
 * Helper to check configuration status
 */
export function getSupabaseConfigStatus() {
  return {
    isConfigured,
    url: supabaseUrl || "Not Configured",
    hasKey: Boolean(supabaseAnonKey)
  };
}
