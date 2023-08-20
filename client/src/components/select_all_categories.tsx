import { AddCategoryDialog } from "./add_category_dialog";
import { ShowOneCategory } from "./show_one_category";
import { useSelector } from "react-redux";

export const SelectAllCategories = (props: any) => {
    const category: Category = props.category;
    const setCategory = props.setCategory;
    const arrCategories: Category[] = useSelector((state: any) =>
        state.categoriesSlice.categories
    );
    return <div className="w-100 mb-2">
        <label className="fs-5 float-start mt-1">choose category:</label>
        <button type="button" className="btn btn-light buttonDropdown g-col-6 g-col-md-4 dropdown-toggle button w-40vw" data-bs-toggle="dropdown" aria-expanded="false">
            {category ? category.category_description : "category"}
        </button>
        {!category && <p className="text-danger float-start m-0">required field</p>}
        <ul className="dropdown-menu selectCategory w-40vw">
            {arrCategories?.map((c: Category) =>
                <div>
                    <div className="dropdown-item d-flex" key={c.idcategory} onClick={() => { setCategory(c) }}>
                        <ShowOneCategory setCategory={setCategory} category={c} />
                    </div>
                    <hr className="dropdown-divider" />

                </div>
            )}
            <div className="dropdown-item">
                <AddCategoryDialog/>
            </div>
        </ul>
    </div>
}