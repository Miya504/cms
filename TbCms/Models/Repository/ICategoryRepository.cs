using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TbCms.Models.Repository
{
    /// <summary>
    /// [マスタメンテ]カテゴリリポジトリ.
    /// </summary>
    public interface ICategoryRepository
    {
        /// <summary>
        /// 初回取得(全件表示).
        /// </summary>
        /// <returns></returns>
        CategoryListViewModel GetFirstListData();

        /// <summary>
        /// 検索結果取得.
        /// </summary>
        /// <returns></returns>
        CategoryListViewModel GetSarchListData(CategoryListViewModel reqModel);

        /// <summary>
        /// 新規登録情報取得.
        /// </summary>
        /// <returns></returns>
        CategoryInputViewModel GetInputNewData();

        /// <summary>
        /// 新規登録.
        /// </summary>
        /// <returns></returns>
        bool RegistrationInputNewData(CategoryInputViewModel reqModel);

        /// <summary>
        /// 編集情報取得.
        /// </summary>
        /// <returns></returns>
        CategoryInputViewModel GetInputEditData(string id);

        /// <summary>
        /// 編集結果登録.
        /// </summary>
        /// <returns></returns>
        bool RegistrationInputEditData(CategoryInputViewModel reqModel);

        /// <summary>
        /// システムユーザIDの検証.
        /// </summary>
        /// <returns></returns>
        bool IsSystemUserIdAvailable(string systemUserId);
    }
}