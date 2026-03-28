import { useState } from 'react';
import { topUsers } from "../utils/topUsers"
import './TWFolloCard.css'

export function TwFollowCard({ name, userName, rank }: { name: string, userName: string, rank?: number }) {
    const [isFollowing, setIsFollowing] = useState("Seguir");
    const [isFollowingClass, setIsFollowingClass] = useState("");
    const badgeColor = rank ? topUsers[rank as keyof typeof topUsers] : undefined;

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        const isFollowing = event.currentTarget.textContent;
        if (isFollowing === 'Seguir') {
            setIsFollowingClass("following");
            setIsFollowing("Siguiendo");
        } else {
            setIsFollowingClass("");
            setIsFollowing("Seguir");
        }
    }

    return (
        <article className={`tw-followCard`}>
            <header className='tw-followCard-header'>
                {
                    rank && <span className="rank-badge" style={{ backgroundColor: badgeColor }}>{rank}</span>
                }
                <img
                    className='tw-followCard-avatar'
                    alt={`${name} Badge`}
                    src={`https://unavatar.io/github/${userName}`}
                />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span>{`@${userName}`}</span>
                </div>
            </header>
            <aside>
                <button className={`tw-followCard-button ${isFollowingClass}`} onClick={handleClick}>
                    {isFollowing}
                </button>
            </aside>
        </article>
    )
}