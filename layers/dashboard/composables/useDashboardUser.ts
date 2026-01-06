import { usePayloadGraphQL } from '~~/layers/shared/composables/usePayloadGraphQL';
import GET_USER_DATA from '~~/app/graphql/queries/dashboard/getUserData.gql';

export interface DashboardUserData {
    enrolledCourses: Array<{ name: string }>;
    accessibleVideoLessons: Array<{ title: string; slug: string }>;
    roles: Array<{ name: string; slug: string }>;
}

const getDashboardUserQuery = `
    ${GET_USER_DATA?.loc?.source?.body}
`;

export const useDashboardUser = () => {
    const gqlQuery = usePayloadGraphQL();

    const fetchDashboardUser = async (): Promise<DashboardUserData> => {
        // Call without userId variable since we're using meUser (authenticated user)
        const response = await gqlQuery<any>(getDashboardUserQuery);

        const user = response?.data?.meUser?.user ?? response?.meUser?.user ?? null;

        if (!user) {
            console.warn('⚠️ No user data returned from meUser query');
            return { enrolledCourses: [], accessibleVideoLessons: [], roles: [] };
        }

        const enrolledRaw = user.enrolledCourses?.docs ?? [];
        const enrolledCourses = enrolledRaw.map((c: any) => ({ name: c.name }));

        const lessonsMap = new Map<string, { title: string; slug: string }>();
        for (const c of enrolledRaw) {
            const vids = c.videoLessons ?? [];
            for (const v of vids) {
                const slug = v.slug;
                if (!slug) continue;
                if (!lessonsMap.has(slug)) lessonsMap.set(slug, { slug, title: v.title });
            }
        }
        const accessibleVideoLessons = Array.from(lessonsMap.values());

        const roles = (user.roles ?? []).map((r: any) => ({ name: r.name, slug: r.slug }));

        const result = { enrolledCourses, accessibleVideoLessons, roles };

        return result;
    };

    return fetchDashboardUser;
};

export default useDashboardUser;
