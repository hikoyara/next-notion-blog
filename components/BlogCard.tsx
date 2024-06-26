import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import moment from "moment";

type CardProps = {
    title: string;
    img: string;
    tag?: {
        id: string;
        name: string;
        color: string;
    }[];
    blogLink: string;
    createdTime: Date;
};

export function BlogCard(props: CardProps) {
    const { title, img, tag, blogLink, createdTime } = props;

    return (
        <Link href={blogLink}>
            <Card className="rounded-xl border bg-card text-card-foreground shadow max-w-full w-96 overflow-hidden flex flex-col justify-between sm:h-80 lg:h-96 m-auto">
                <div>
                    <img src={img ? img : "https://dummyimage.com/404x404/000/fff&text=404"} alt="" className="w-full object-cover object-center h-40 lg:h-48" />
                    <CardContent className="px-3 py-4 grid gap-4">
                        <CardTitle className="line-clamp-2 text-lg">{title}</CardTitle>
                        {tag?.map((item) => (
                            <CardDescription key={item.id}>{item.name}</CardDescription>
                        ))}
                    </CardContent>
                </div>
                <CardFooter className="px-2 py-3 justify-center border-t border-t-gray-200">
                    <p className="text-gray-400 font-medium">{moment(createdTime).format("YYYY.MM.DD")}</p>
                </CardFooter>
            </Card>
        </Link>
    );
}
