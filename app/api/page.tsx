import { ReactSwagger } from './component/ReactSwagger';
import { getApiDocs, initializeDataSource } from './utility';

export default async function IndexPage() {
    const spec = await getApiDocs();
    await initializeDataSource();

    return (
        <section className="container">
            <ReactSwagger spec={spec} />
        </section>
    );
}