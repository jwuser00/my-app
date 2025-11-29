type ProfileProps = {
    photo: string;
    name: string;
    job: string;
    isNew?: boolean;
};

export default function Profile({ photo, name, job, isNew }: ProfileProps) {
    return <div className="profile">
        <img className="photo"
            src={photo} alt="photo" />
        {isNew && <p>NEW</p>}
        <h1>{name}</h1>
        <p>{job}</p>
    </div>;
}

