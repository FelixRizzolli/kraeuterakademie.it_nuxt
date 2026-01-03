import FIND_COURSE_VIDEO_LESSONS from '~/graphql/queries/dashboard/findCourseVideoLessons.gql';
import { usePayloadGraphQL } from '~~/layers/shared/composables/usePayloadGraphQL';

const getCourseVideoLessonQuery = `
    ${FIND_COURSE_VIDEO_LESSONS?.loc?.source?.body}
`;

export const useCourseVideoLesson = () => {
    const gqlQuery = usePayloadGraphQL();

    const fetchCourseVideoLesson = async (slug: string): Promise<CourseVideoLesson | null> => {
        try {
            const response = await gqlQuery<any>(getCourseVideoLessonQuery, {
                where: {
                    slug: {
                        equals: slug,
                    },
                },
            });

            if (response?.errors && response.errors.length) {
                console.error('GraphQL errors when fetching course video lesson:', response.errors);
            }

            if (!response?.data?.CourseVideoLessons?.docs?.length) {
                console.warn('Course video lesson not found for slug:', slug);
                return null;
            }

            return response.data?.CourseVideoLessons?.docs?.[0] || null;
        } catch (error) {
            console.error('Error fetching course video lesson data:', error);
            throw error;
        }
    };

    return fetchCourseVideoLesson;
};
