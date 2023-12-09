import { TagOutlined } from "@ant-design/icons";
import { Button } from "@/shared/ui/button";

interface DateFilterProps {

}

export function TagFilter(props: DateFilterProps) {
    return (
        <Button>Теги<TagOutlined/></Button>
    );
}