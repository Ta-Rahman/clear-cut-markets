import { ref, onMounted } from 'vue';
import { supabase } from '@/supabase';

// A reactive object to hold the user's data
const user = ref(null);
const profile = ref(null);
const isLoggedIn = ref(false);

export function useUser() {
    // Function to fetch the current session and profile data
    const fetchUser = async () => {
        const { data: sessionData } = await supabase.auth.getSession();
        isLoggedIn.value = !!sessionData.session;
        user.value = sessionData.session?.user || null;

        if (user.value) {
            // If a user is logged in, fetch their profile from the 'profiles' table
            const { data: profileData, error } = await supabase
                .from('profiles')
                .select('subscription_tier, first_name, last_name')
                .eq('id', user.value.id)
                .single();

            if (error) {
                console.error("Error fetching profile:", error);
            } else {
                profile.value = profileData;
            }
        }
    };

    // Automatically fetch the user when the composable is first used
    onMounted(fetchUser);

    return {
        user,
        profile,
        isLoggedIn,
        fetchUser
    };
}