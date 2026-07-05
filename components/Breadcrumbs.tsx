import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
                <li>
                    <Link href="/" className="hover:text-gray-900 transition-colors">
                        Home
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        {index === items.length - 1 ? (
                            <span className="text-gray-900 font-medium">{item.name}</span>
                        ) : (
                            <Link href={item.url} className="hover:text-gray-900 transition-colors">
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
