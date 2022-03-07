import { useEffect, useContext } from 'react';
import loadingAnim from '../../img/loading.svg';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
    // destructure states & setters from Context
    const { users, loading, fetchUsers } = useContext(GithubContext);

    useEffect(() => {
        fetchUsers();
    }, []);

    // Show spinner while loading, then results when done
    return loading ? (
        <img src={loadingAnim} alt="" style={{ scale: '50%' }} />
    ) : (
        <div className="grid grid-calls-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
}

export default UserResults;
