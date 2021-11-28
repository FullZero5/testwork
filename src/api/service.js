import HTTP from './fetch';

const getUrl = () => `https://api.github.com/repos/`;
const getData = (url,  option) => HTTP(`${getUrl()}${url}`, option);

const ApiService = () => {
    return {
        async getForks(owner, repositoryName) {
            const forks = await getData(`${owner}/${repositoryName}/forks`);
            return forks
        }
    };
}

export default new ApiService();