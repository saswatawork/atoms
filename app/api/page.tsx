import { ReactSwagger } from './component/ReactSwagger';
import { getApiDocs } from './utility';


export default async function IndexPage() {
    const spec = await getApiDocs();

    return (
        <section className="container">
            <ReactSwagger spec={spec} />
        </section>
    );
}