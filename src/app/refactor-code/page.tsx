import { requireAuth } from '@/lib/helper';

export default async function Page() {
    await requireAuth();

    return <h1>Refactor code</h1>;
}
