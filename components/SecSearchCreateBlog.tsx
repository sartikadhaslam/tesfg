
export default function SecSearchCreateBlog() {
  return (
      // <section className="mt-40">
        <div className="container mx-auto">
          <div className="flex items-center space-x-6">
            <div className="w-10/12">
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-6 pointer-events-none">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.55055 12.4468 8.05071 12.9999 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z" fill="black"/>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full py-4 px-16 text-lg font-semibold text-gray-900 bg-gray-200 rounded-full border border-gray-300"
                  placeholder="Cari Blog Kamu disini"
                />
              </div>
            </div>
            <div className="w-2/12">
              <button
                className="w-full text-sm py-4 px-5 rounded-full bg-pink-800 text-white text-center inline-flex items-center mr-2 mb-2"
                type="submit"
              >
                <svg className="mr-4 ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 3.5C9.74566 3.5 7.58365 4.39553 5.98959 5.98959C4.39553 7.58365 3.5 9.74566 3.5 12C3.5 14.2543 4.39553 16.4163 5.98959 18.0104C7.58365 19.6045 9.74566 20.5 12 20.5C14.2543 20.5 16.4163 19.6045 18.0104 18.0104C19.6045 16.4163 20.5 14.2543 20.5 12C20.5 9.74566 19.6045 7.58365 18.0104 5.98959C16.4163 4.39553 14.2543 3.5 12 3.5ZM12 7C12.1989 7 12.3897 7.07902 12.5303 7.21967C12.671 7.36032 12.75 7.55109 12.75 7.75V11.25H16.25C16.4489 11.25 16.6397 11.329 16.7803 11.4697C16.921 11.6103 17 11.8011 17 12C17 12.1989 16.921 12.3897 16.7803 12.5303C16.6397 12.671 16.4489 12.75 16.25 12.75H12.75V16.25C12.75 16.4489 12.671 16.6397 12.5303 16.7803C12.3897 16.921 12.1989 17 12 17C11.8011 17 11.6103 16.921 11.4697 16.7803C11.329 16.6397 11.25 16.4489 11.25 16.25V12.75H7.75C7.55109 12.75 7.36032 12.671 7.21967 12.5303C7.07902 12.3897 7 12.1989 7 12C7 11.8011 7.07902 11.6103 7.21967 11.4697C7.36032 11.329 7.55109 11.25 7.75 11.25H11.25V7.75C11.25 7.55109 11.329 7.36032 11.4697 7.21967C11.6103 7.07902 11.8011 7 12 7Z" fill="white"/>
                </svg>
                Create New Blog
              </button>
            </div>
          </div>
        </div>
      // </section>
  )
}
