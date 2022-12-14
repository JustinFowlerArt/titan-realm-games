interface Props {
    children?: React.ReactNode;
}

export const Section = ({ children }: Props) => {
    return (
        <section className='flex flex-col items-center w-full px-3 py-6 md:p-6 lg:px-6 lg:py-10 xl:p-20 last:mb-20'>
            {children}
        </section>
    );
};
