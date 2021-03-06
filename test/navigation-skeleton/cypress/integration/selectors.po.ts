export const Shared = {
  appMenuNavItems: '[data-test=app-menu] li',
  appMenuNavItemsActive: '[data-test=app-menu] li.nav-active',
  listsViewport: 'au-viewport[name=lists]',
  contentViewport: 'au-viewport[name=content]',
  chatViewport: 'au-viewport[name=chat]',
  noDelayCheckbox: '[data-test=no-delay-checkbox]',
  allowEnterAuthorDetailsCheckbox: '[data-test=allow-enter-author-details-checkbox]',
  infoBackgroundColor: '[data-test=info-background-color]'
};

export const AuthorsComponent = {
  items: '[data-test=authors-element-item]',
  authorLinks: '[data-test=authors-element-author-link]',
  bookTitles: '[data-test=authors-element-book-name]'
};

export const AuthorComponent = {
  bookLinks: '[data-test=author-element-book-link]',
  authorName: '[data-test=author-element-author-name]',
  authorBirthYear: '[data-test=author-element-birth-year]',
  hideTabsCheckbox: '[data-test=author-element-hide-tabs-checkbox]',
  authorMenuNavItems: '[data-test=author-menu] li',
  authorMenuNavItemsActive: '[data-test=author-menu] li.nav-active',
  authorTabsViewport: 'au-viewport[name=author-tabs]'
};

export const AboutComponent = {
  aboutInput: '[data-test=about-inputbox]'
};

export const BooksComponent = {
  items: '[data-test=books-element-item]',
  bookLinks: '[data-test=books-element-book-link]',
  authorNames: '[data-test=books-element-author-name]'
};

export const BookComponent = {
  authorLinks: '[data-test=book-element-author-link]',
  bookName: '[data-test=book-element-book-name]',
  publishYear: '[data-test=book-element-publish-year]',
  bookMenuNavItems: '[data-test=book-menu] li',
  bookMenuNavItemsActive: '[data-test=book-menu] li.nav-active',
  bookTabsViewport: 'au-viewport[name=book-tabs]'
};

export const ChatComponent = {
  close: '[data-test=chat-element-close]',
  chatMainViewport: 'au-viewport[name=chat-main]',
  chatDetailsViewport: 'au-viewport[name=chat-details]'
};

export const ChatUsersComponent = {
  items: '[data-test=chat-users-element-item]',
  userLinks: '[data-test=chat-users-element-links]'
};

export const ChatDetailsComponent = {
  chatTitle: '[data-test=chat-user-element-title]',
  chatInput: '[data-test=chat-user-element-input]'
};
