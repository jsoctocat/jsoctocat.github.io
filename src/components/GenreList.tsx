import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import GetCroppedImageUrl from '../services/image-url';

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre} : Props) => {
    const { data, isLoading, error } = useGenres();

    if(error) return null;

    if(isLoading) return <Spinner></Spinner>

    return (
        <List>
            {data.map(genre => 
            <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={GetCroppedImageUrl(genre.image_background)}></Image>
                    <Button onClick={() => onSelectGenre(genre)} fontSize={'large'} variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList