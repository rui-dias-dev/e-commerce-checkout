export interface TagProps {
    name: string;
}

export const Tag = ({ name }: TagProps) => {
    return (
        <li className="rounded-full bg-yellow-light px-2 py-1 text-xxs font-bold uppercase text-yellow-dark">
            {name}
        </li>
    );
};
