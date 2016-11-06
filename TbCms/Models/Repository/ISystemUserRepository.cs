using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TbCms.Models.Repository
{
    /// <summary>
    /// [マスタメンテ]システムユーザリポジトリ.
    /// </summary>
    public interface ISystemUserRepository
    {
        /// <summary>
        /// 初回取得(全件表示).
        /// </summary>
        /// <returns></returns>
        SystemUserListViewModel GetFirstListData();

        /// <summary>
        /// 検索結果取得.
        /// </summary>
        /// <returns></returns>
        SystemUserListViewModel GetSarchListData(SystemUserListViewModel reqModel);

        /// <summary>
        /// 新規登録情報取得.
        /// </summary>
        /// <returns></returns>
        SystemUserInputViewModel GetInputNewData();

        /// <summary>
        /// 新規登録.
        /// </summary>
        /// <returns></returns>
        bool RegistrationInputNewData(SystemUserInputViewModel reqModel);

        /// <summary>
        /// 編集情報取得.
        /// </summary>
        /// <returns></returns>
        SystemUserInputViewModel GetInputEditData(string id);

        /// <summary>
        /// 編集結果登録.
        /// </summary>
        /// <returns></returns>
        bool RegistrationInputEditData(SystemUserInputViewModel reqModel);

        /// <summary>
        /// システムユーザIDの検証.
        /// </summary>
        /// <returns></returns>
        bool IsSystemUserIdAvailable(string systemUserId);
    }
}