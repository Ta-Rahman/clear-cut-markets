import { ref } from 'vue';
import { supabase } from '@/supabase';

const user = ref(null);

export function useAuth() {
    const login = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) throw error;
        user.value = data.user;
        return data.user;
    };

    const signUp = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });
        if (error) throw error;
        user.value = data.user;
        return data.user;
    };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        user.value = null;
    };

    const getCurrentUser = async () => {
        const { data } = await supabase.auth.getUser();
        user.value = data.user;
        return user.value;
    }

    return {
        user,
        login,
        signUp,
        signOut,
        getCurrentUser
    };
}