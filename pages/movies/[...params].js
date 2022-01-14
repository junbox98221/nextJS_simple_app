import { useRouter } from "next/router";

export default function Detail({ params }) {
    const router = useRouter();
    const [title, id] = params || [];

    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}

export function getServerSideProps({ params: { params } }) {
    return {
        props: { params },
    };
}
