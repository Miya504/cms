using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TbCms.Models;
using TbCms.Models.Repository;

namespace TbCms.Controllers.Internal.InternalCommon
{
    public class LoginController : Controller
    {
        /// <summary>
        /// リポジトリクラス.
        /// </summary>
        private ILoginRepository _rep;

        /// <summary>
        /// コンストラクタ.
        /// </summary>
        public LoginController() : this(new LoginRepository()) { }

        /// <summary>
        /// 第2コンストラクタ.
        /// </summary>
        /// <param name="rep"></param>
        public LoginController(ILoginRepository rep)
        {
            // リポジトリクラスを紐づける.
            _rep = rep;
        }

        /// <summary>
        /// ログイン(初回).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Login()
        {
            var loginViewModel =new LoginViewModel();

            return View(loginViewModel);
        }

        /// <summary>
        /// ログイン(ログインボタン).
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult Login(LoginViewModel model)
        {
            var db = new TbCmsContext();

            var loginViewModel = _rep.CheckLogin(model);

            if (loginViewModel.IsSuccess)
            {
                // ログイン成功.

                // セッションに必要な情報を設定.
                Session["IsAdministrator"] = true;  // TODO：暫定.
                Session["IsCreateNews"] = true;     // TODO：暫定.
                Session["IsCreateContents"] = true;  // TODO：暫定.

                Session["LoginId"] = loginViewModel.system_user_id;
                
                return Redirect("../Menu/Menu");
            }
            else
            {
                return View(loginViewModel);
            }
        }
    }
}