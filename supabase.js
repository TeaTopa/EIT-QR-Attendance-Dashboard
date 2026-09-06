import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = "https://ircczsnhixgxlvakcyft.supabase.co";
const SUPABASE_KEY = "sb_publishable_jQEq_Zsl4x4P_7FE7_OL6Q_tGGdpDQp";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);