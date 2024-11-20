import AVATAR_IMG from '../../../public/avatar.png';
import AvatarUser from "./AvatarUser";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./select";

export default function ChangeUserSelect() {

    return (
        <Select>
            <SelectTrigger className="w-60 h-12">

                <AvatarUser
                    alt="avatar do usuário"
                    src={AVATAR_IMG}
                />

                <div className="flex-col text-left">
                    <p className="text-base font-bold">
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
