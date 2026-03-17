import Link from 'next/link';

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <nav className="mb-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {breadcrumbs?.map((breadcrumb, index) => (
          <li key={breadcrumb.label} className="flex items-center">
            <Link
              href={breadcrumb.href}
              className={`hover:underline ${
                index === breadcrumbs.length - 1
                  ? 'text-gray-900 font-medium'
                  : ''
              }`}
            >
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
