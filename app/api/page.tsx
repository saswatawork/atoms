import { ReactSwagger } from './component/ReactSwagger';
import { getApiDocs, initializeDataSource } from './utility';

export default async function IndexPage() {
    const spec = await getApiDocs();
    const isDataSourceInitialized = await initializeDataSource();

    return (
        <>
            {(spec && isDataSourceInitialized) ? (
                <section className="container">
                    <ReactSwagger spec={spec} />
                </section>
            ) : null}
        </>
    );
}