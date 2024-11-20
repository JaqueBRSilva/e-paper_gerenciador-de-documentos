import AVATAR_IMG from '../../../public/avatar.png';
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import AvatarUser from './AvatarUser';

export default function ChangeUserSelect() {

    return (
        <Select>
            <SelectTrigger className="max-w-56 h-12">

                <AvatarUser
                    alt="avatar do usuário"
                    src={AVATAR_IMG}
                />

                <div className="flex-col text-left mr-4 mobile-ui-hidden">
                    <p className="text-sm font-bold">
                        Nome do usuário
                    </p>
                    <p className="text-xs text-gray500">
                        Organização
                    </p>
                </div>
            </SelectTrigger>

            <SelectContent align='center'>
                <SelectItem value="logout">Log out</SelectItem>
            </SelectContent>
        </Select>
    )
}
