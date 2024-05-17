import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type CardProps = {
    title: string;
    img: string;
    tag?: {
        id: string;
        name: string;
        color: string;
    }[];
    blogLink: string;
};

export function BlogCard(props: CardProps) {
    const { title, img, tag, blogLink } = props;

    return (
        <Link href={blogLink}>
            <Card className={cn("w-[380px] overflow-hidden")}>
                <img src={img ? img : "https://dummyimage.com/404x404/000/fff&text=404"} alt="" className="w-full object-cover object-center h-40 lg:h-48" />
                <CardContent className="grid gap-4">
                    <CardTitle>{title}</CardTitle>
                    {tag?.map((item) => (
                        <CardDescription key={item.id}>{item.name}</CardDescription>
                    ))}
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
        </Link>
    );
}
