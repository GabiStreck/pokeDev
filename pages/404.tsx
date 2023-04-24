import { NextPage } from 'next';
import ErrorPage from '@/components/ErrorPage';

interface Props {
    toggleDarkMode: () => void;
}

const PageNotFound: NextPage<Props> = ({ toggleDarkMode }) => {
    return <ErrorPage toggleDarkMode={toggleDarkMode} />;
};

export default PageNotFound;
