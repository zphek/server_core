export const requiredPrivileges: Record<string, string[]> = {
    // USERS ROUTES.
    '/users/get': ['ALL', 'Users'],
    '/users/update':['ALL', 'Users'],

    // PROFILES ROUTES.
    '/profiles/get': ['ALL', 'Profiles'],
    '/profiles/create': ['ALL', 'Profiles'],
    '/profiles/update': ['ALL', 'Profiles'],

    // PRODUCTS ROUTES.
    '/products/create': ['ALL', 'Products'],
    '/products/update': ['ALL', 'Products'],
    
    // CLIENTS ROUTES.
    '/clients/create': ['ALL', 'Clients'],
    '/clients/get': ['ALL', 'Clients'],
    '/clients/update': ['ALL', 'Clients'],

    // SERVICES ROUTES.
    '/services/create': ['ALL', 'Services'],
    '/services/update': ['ALL', 'Services'],
    
    // QUOTES ROUTES.
    '/quotes/get': ['ALL', 'Quotes'],
    '/quotes/create': ['ALL', 'Quotes'],
    '/quotes/update': ['ALL', 'Quotes'],

    // ACCOUNTS-RECEIVABLE ROUTES.
    '/accounts-receivable/get':['ALL', 'Account_R'],
    '/accounts-receivable/create':['ALL', 'Account_R'],
    '/accounts-receivable/update':['ALL', 'Account_R'],

    // CATEGORIES ROUTES.
    '/category/create':['ALL', 'Categories'],
    '/category/update':['ALL', 'Categories']
};