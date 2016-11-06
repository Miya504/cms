using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TbCms.Models.Repository
{
    /// <summary>
    /// ログインリポジトリ.
    /// </summary>
    public interface ILoginRepository
    {
        /// <summary>
        /// ログインチェック.
        /// </summary>
        /// <returns></returns>
        LoginViewModel CheckLogin(LoginViewModel reqModel);

    }
}