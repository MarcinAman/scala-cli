package scala.cli.integration

import com.eed3si9n.expecty.Expecty.expect

class HelpTests extends munit.FunSuite {

  val inputs = TestInputs(
    Seq(
      os.rel / "simple.sc" ->
        s"""val msg = "Hello"
           |println(msg)
           |""".stripMargin
    )
  )

  for(command <- Seq("help", "-help", "--help"))
    test(command) {
      inputs.fromRoot { root =>
        val result = os.proc(TestUtil.cli, command).call(cwd = root)
        expect(result.exitCode == 0)
        expect(result.out.lines().head.startsWith("Usage:"))
      }
    }
}

